'use client'

import { Modal } from "@/components/ui/Modal";

const SetUppage=() => {
  return (
    <div className="p-4">
      <Modal isOpen title="Test" description="TEST" onClose={()=>{} } >
        Children
      </Modal>
    </div>
  );
}
export default SetUppage;
