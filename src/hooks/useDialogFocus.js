import { useEffect } from 'react';

// Both overlays share scroll locking, keyboard containment and focus restoration.
export function useDialogFocus(isOpen, panelRef, onClose, returnFocusRef) {
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = returnFocusRef?.current || document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const panel = panelRef.current;
    document.body.style.overflow = 'hidden';
    const selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], [tabindex="0"]';
    const focusables = () => [...(panel?.querySelectorAll(selector) || [])];
    (focusables()[0] || panel)?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) { event.preventDefault(); panel?.focus(); return; }
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen, panelRef, onClose, returnFocusRef]);
}
