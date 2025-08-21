import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import ControlledForm from '../../components/Form/controllers/Controlled/Controlled';
import UncontrolledForm from '../../components/Form/controllers/Uncontrolled/Uncontrolled';
import type { FormData } from '../../components/Form/Fields/FormFields';
import styles from './Main.module.scss';

interface StoredFormData extends Omit<FormData, 'image'> {
  image?: string; // base64 string
  formType: 'uncontrolled' | 'controlled';
  timestamp: number;
}

export default function MainPage() {
  const [showModal, setShowModal] = useState<
    'uncontrolled' | 'controlled' | null
  >(null);
  const [submittedData, setSubmittedData] = useState<StoredFormData[]>([]);

  const handleFormSubmit = async (
    data: FormData,
    formType: 'uncontrolled' | 'controlled'
  ) => {
    console.log('Form submitted:', data, formType);

    let formData: StoredFormData;

    try {
      if (data.image && data.image.length > 0) {
        const file = data.image[0];
        const base64Image = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = () => reject(new Error('Failed to read image'));
          reader.readAsDataURL(file);
        });

        formData = {
          ...data,
          image: base64Image,
          formType,
          timestamp: Date.now(),
        };
      } else {
        formData = {
          ...data,
          image: undefined,
          formType,
          timestamp: Date.now(),
        };
      }

      setSubmittedData((prev) => [...prev, formData]);
    } catch (error) {
      console.error('Error processing form submission:', error);
    }

    setShowModal(null);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Form Submission Portal</h1>
      </header>

      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => setShowModal('controlled')}
          aria-label="Open controlled form"
        >
          Show Controlled Form
        </button>
        <button
          className={styles.button}
          onClick={() => setShowModal('uncontrolled')}
          aria-label="Open uncontrolled form"
        >
          Show Uncontrolled Form
        </button>
      </div>

      <Modal
        isOpen={showModal !== null}
        onClose={() => setShowModal(null)}
        showCloseButton={true}
      >
        {showModal ? (
          <>
            <h2 className={styles.modalTitle}>
              {showModal === 'controlled'
                ? 'React Hook Form'
                : 'Uncontrolled Form'}
            </h2>
            {showModal === 'controlled' ? (
              <ControlledForm
                onSubmit={(data) => handleFormSubmit(data, 'controlled')}
              />
            ) : (
              <UncontrolledForm
                onSubmit={(data) => handleFormSubmit(data, 'uncontrolled')}
              />
            )}
          </>
        ) : null}
      </Modal>

      {submittedData.length > 0 && (
        <div className={styles.submittedData}>
          <h2>Submitted Forms</h2>
          {submittedData.map((data, index) => (
            <div key={index} className={styles.dataCard}>
              <h3>{data.formType} Form Submission</h3>
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
              {data.image && (
                <div>
                  <strong>Image:</strong>
                  <img
                    src={data.image}
                    alt="Uploaded"
                    className={styles.previewImage}
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
