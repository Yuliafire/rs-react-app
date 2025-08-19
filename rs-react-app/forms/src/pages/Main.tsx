import { useState } from 'react';
import Modal from '../components/Modal/Modal';
import UncontrolledForm from '../components/Form/controllers/Uncontrolled/Uncontrolled';
// import ControlledForm from '../components/Form/controllers/Controlled/Controlled';
import type { FormData } from '../components/Form/types/types';
import styles from './Main.module.scss';

// Create a new type for stored data that includes the base64 image
interface StoredFormData extends Omit<FormData, 'image'> {
  image?: string; // base64 string instead of FileList
  formType: 'uncontrolled' | 'controlled';
  timestamp: number;
  isNew: boolean;
}

export default function MainPage() {
  const [showModal, setShowModal] = useState<
    'uncontrolled' | 'controlled' | null
  >(null);
  const [submittedData, setSubmittedData] = useState<StoredFormData[]>([]);

  const handleFormSubmit = (
    data: FormData,
    formType: 'uncontrolled' | 'controlled'
  ) => {
    console.log('Form submitted:', data, formType);

    // Handle image conversion to base64 if image exists
    if (data.image && data.image.length > 0) {
      const file = data.image[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const formDataWithImage: StoredFormData = {
          // Spread all data except image (we'll replace it)
          name: data.name,
          age: data.age,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          gender: data.gender,
          acceptedTC: data.acceptedTC,
          country: data.country,
          // Replace FileList with base64 string
          image: reader.result as string,
          formType,
          timestamp: Date.now(),
          isNew: true,
          termsAccepted: false,
        };
        setSubmittedData((prev) => [...prev, formDataWithImage]);
      };
      reader.readAsDataURL(file);
    } else {
      const formDataWithoutImage: StoredFormData = {
        // Spread all data
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        gender: data.gender,
        acceptedTC: data.acceptedTC,
        country: data.country,
        // No image
        formType,
        timestamp: Date.now(),
        isNew: true,
        termsAccepted: false,
      };
      setSubmittedData((prev) => [...prev, formDataWithoutImage]);
    }

    // Close modal after submission
    setShowModal(null);
  };

  return (
    <div className={styles.container}>
      <header className="page-header">
        <h1>Form Submission Portal</h1>
      </header>

      <div className={styles.buttonContainer}>
        <button
          className={styles.uncontrolledButton}
          onClick={() => setShowModal('uncontrolled')}
        >
          Show Uncontrolled Form
        </button>
        <button
          className={styles.controlledButton}
          onClick={() => setShowModal('controlled')}
        >
          Show Controlled Form
        </button>
      </div>

      {/* Display submitted data */}
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

      <Modal
        isOpen={showModal === 'uncontrolled'}
        onClose={() => setShowModal(null)}
      >
        <h2 className={styles.title}>Uncontrolled Form</h2>
        <UncontrolledForm
          onSubmit={(data) =>
            handleFormSubmit(data as unknown as FormData, 'uncontrolled')
          }
        />
        <button
          className={styles.closeButton}
          onClick={() => setShowModal(null)}
        >
          Close
        </button>
      </Modal>

      <Modal
        isOpen={showModal === 'controlled'}
        onClose={() => setShowModal(null)}
      >
        <h2 className={styles.title}>Controlled Form (React Hook Form)</h2>
        {/* <ControlledForm
          onSubmit={(data) =>
            handleFormSubmit(data as unknown as FormData, 'controlled')
          }
        /> */}
        <button
          className={styles.closeButton}
          onClick={() => setShowModal(null)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
