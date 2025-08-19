// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import styles from './Modal.module.scss';
// import FocusTrap from 'focus-trap-react';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
//   showCloseButton?: boolean;
// }

// export default function Modal({
//   isOpen,
//   onClose,
//   children,
//   showCloseButton = true,
// }: ModalProps) {
//   useEffect(() => {
//     if (!isOpen) return;

//     const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
//     document.addEventListener('keydown', handleEscape);

//     // Prevent body scroll when modal is open
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return createPortal(
//     <FocusTrap>
//       <div className={styles.modalOverlay} onClick={onClose}>
//         <div
//           className={styles.modalContent}
//           role="dialog"
//           aria-modal="true"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {showCloseButton && (
//             <button
//               className={styles.closeButton}
//               onClick={onClose}
//               aria-label="Close modal"
//             >
//               ×
//             </button>
//           )}
//           {children}
//         </div>
//       </div>
//     </FocusTrap>,
//     document.body
//   );
// }

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type FocusTrap from 'focus-trap-react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
}: ModalProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Store the element that opened the modal
    previousActiveElement.current = document.activeElement as HTMLElement;

    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      previousActiveElement.current?.focus(); // Restore focus
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <FocusTrap>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          )}
          {children}
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
}
