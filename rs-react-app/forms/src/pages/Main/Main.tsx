import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/ui/Modal/Modal';
import ControlledForm from '../../components/Form/controllers/Controlled/Controlled';
import UncontrolledForm from '../../components/Form/controllers/Uncontrolled/Uncontrolled';
import type { FormData } from '../../components/Form/Fields/FormFields';
import { selectSentFormData, addNewSubmit } from '../../shared/store/formSlice';
import styles from './Main.module.scss';
import { fileToBase64 } from '../../components/Form/schema';

export default function MainPage() {
  const [showModal, setShowModal] = useState<
    'uncontrolled' | 'controlled' | null
  >(null);
  const [newSubmissionId, setNewSubmissionId] = useState<string | null>(null);
  const submissions = useSelector(selectSentFormData) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (newSubmissionId) {
      const timer = setTimeout(() => {
        setNewSubmissionId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [newSubmissionId]);

  const handleFormSubmit = async (
    data: Omit<FormData, 'id'> & { image?: string | File | null }
  ) => {
    if (!data) {
      console.error('No data received in form submission');
      return;
    }

    const processedData: Omit<FormData, 'id'> = { ...data };
    if (data.image instanceof File) {
      try {
        processedData.image = await fileToBase64(data.image);
      } catch (error) {
        console.error('Error converting file to base64:', error);
        return;
      }
    }

    dispatch(addNewSubmit(processedData));
    setNewSubmissionId(
      submissions[submissions.length - 1]?.id || crypto.randomUUID()
    );
    setShowModal(null);
  };

  return (
    <div className={styles.container} data-testid="main-page">
      <header className={styles.header}>
        <h1 data-testid="page-title">Form Submission Portal</h1>
      </header>

      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => setShowModal('controlled')}
          aria-label="Show Controlled Form"
          data-testid="controlled-form-button"
        >
          Show Controlled Form
        </button>
        <button
          className={styles.button}
          onClick={() => setShowModal('uncontrolled')}
          aria-label="Show Uncontrolled Form"
          data-testid="uncontrolled-form-button"
        >
          Show Uncontrolled Form
        </button>
      </div>

      <Modal
        isOpen={showModal !== null}
        onClose={() => setShowModal(null)}
        showCloseButton={true}
        data-testid="modal"
      >
        {showModal && (
          <>
            <h2 className={styles.modalTitle} data-testid="modal-title">
              {showModal === 'controlled'
                ? 'React Hook Form'
                : 'Uncontrolled Form'}
            </h2>
            {showModal === 'controlled' ? (
              <ControlledForm onSubmit={handleFormSubmit} />
            ) : (
              <UncontrolledForm onSubmit={handleFormSubmit} />
            )}
          </>
        )}
      </Modal>

      {Array.isArray(submissions) && submissions.length > 0 && (
        <div className={styles.submittedData} data-testid="submitted-forms">
          <h2>Submitted Forms</h2>
          {submissions.map((data) => (
            <div
              key={data.id}
              className={`${styles.dataCard} ${data.id === newSubmissionId ? styles.highlightNew : ''}`}
              data-testid="submission-card"
            >
              <h3>Form Submission</h3>
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Age:</strong> {data.age}
              </p>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Country:</strong> {data.country}
              </p>
              <p>
                <strong>T&C Accepted:</strong> {data.acceptedTC ? 'Yes' : 'No'}
              </p>
              {data.image && (
                <div>
                  <strong>Image:</strong>
                  <img
                    src={data.image}
                    alt="Uploaded"
                    className={styles.previewImage}
                    data-testid="submission-image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
