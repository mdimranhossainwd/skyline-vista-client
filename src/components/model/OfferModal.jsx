import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import { Modal } from "../../utils/Model";

export const OfferModal = ({ isOpen, setIsOpen, offerInfoData }) => {
  const { register, handleSubmit } = useForm();
  const axios = useAxios();
  const { user } = useAuth();

  //   Make an Offer Property Functions
  const onSubmit = async (data) => {
    const { offerAmount } = data;
    const offerRoomData = {
      rooms_id: offerInfoData._id,
      offer_amount: offerAmount,
      offer_date: new Date(),
      email: user?.email,
      name: user?.displayName,
      ...offerInfoData,
    };

    try {
      await axios.post("/add-to-offer", offerRoomData);
      setIsOpen(false);
      toast.success("Offer Room sucessfully");
    } catch (error) {
      console.log(error);
    }

    console.log(offerInfoData);
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-lg font-semibold">Make An Offer</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-sm mt-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="offerAmount"
              >
                Offer Amount
              </label>
              <input
                type="number"
                id="offerAmount"
                placeholder="$0.00"
                {...register("offerAmount", { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="mt-6 px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded"
            >
              Submit Offer
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
