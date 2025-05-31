import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ClinicForm from "./components/form";

const ClinicFormPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Dialog open={true}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Adicioar clinica</DialogTitle>
            <DialogDescription>
              Adicione uma clinica para que você possa gerenciar seus pacientes
            </DialogDescription>
          </DialogHeader>
          <ClinicForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClinicFormPage;
