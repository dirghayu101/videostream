export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  endpoint?: string; // Optional endpoint for API calls
}