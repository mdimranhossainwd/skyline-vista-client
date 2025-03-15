import { AddPropertyForm } from "../../components/form/AddPropertyForm";
import { Heading } from "../../components/shared/heading/Heading";

export const AddPropertiesPage = () => {
  return (
    <>
      <Heading heading="Add Your Own Properties" />
      <div>
        <AddPropertyForm />
      </div>
    </>
  );
};
