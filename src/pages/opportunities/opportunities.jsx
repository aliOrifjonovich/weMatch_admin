import Modal from "@/components/shared/modal";
import Table from "@/components/shared/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import React from "react";
import { useState } from "react";

const Opportunities = () => {
  const [openModal, setOpenModal] = useState(false);
  const handlePost = async (e) =>{
        e.preventDefault()

        const data = {
            
        }
  }
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5">
          <Input
            className="max-w-[300px] w-full"
            placeholder="Search by name"
          />
          <Button onClick={() => setOpenModal(true)}>
            <Plus />
            Add
          </Button>
        </div>

        <div className="w-full">
          <Table />
        </div>
      </div>
      {openModal && (
        <Modal close={setOpenModal}>
          <div className="bg-white w-[400px] p-6 rounded-[12px]">
            <h1 className="mb-3">Add Opportunities</h1>
            <form className="flex flex-col gap-3">
              <div>
                <Label className="mb-2">Image upload</Label>
                <Input type="file" />
              </div>
              <div>
                <Label className="mb-2">Name</Label>
                <Input type="text" placeholder="Name" />
              </div>
              <div>
                <Label className="mb-2">Description</Label>
                <Input type="text" placeholder="Description" />
              </div>
              <div>
                <Label className="mb-2">Location</Label>
                <Input type="text" placeholder="Location" />
              </div>
              <div>
                <Label className="mb-2">Opportunity type</Label>
                <Input type="text" placeholder="Opportunity type" />
              </div>
              <Button>Create</Button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Opportunities;
