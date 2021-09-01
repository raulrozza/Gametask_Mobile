export default interface IToastContext {
  showInfo(message: string): void;
  showSuccess(message: string): void;
  showError(message: string): void;
}
