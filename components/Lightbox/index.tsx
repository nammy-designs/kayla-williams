import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LightboxProps = {
  isOpen: boolean;
  imageUrl: string;
  layoutId?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

const Lightbox: FC<LightboxProps> = ({
  isOpen,
  imageUrl,
  onClose,
  layoutId,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.img
          src={imageUrl}
          alt="Large"
          layoutId={layoutId}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[95vw] rounded shadow-lg"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
        {hasPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-40 rounded-full text-black hover:cursor-pointer"
            aria-label="Previous image"
          >
            &#8592;
          </button>
        )}
        {hasNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-40 rounded-full text-black hover:cursor-pointer"
            aria-label="Next image"
          >
            &#8594;
          </button>
        )}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Lightbox;
