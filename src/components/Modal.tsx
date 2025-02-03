import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;
      
      // Previne o scroll do body quando o modal está aberto
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restaura o scroll do body quando o modal é fechado
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>

        {/* Modal panel */}
        <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-xl relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;