import Logo from "../asset/images/logo.svg";

function UserType({ setType, setStage }) {
  const handleUserTypeSelection = (selectedType) => {
    setType(selectedType);
    setStage("form");
  };
  return (
    <div className="flex flex-col items-center border-2 border-gray-100 bg-white shadow-sm w-[560px] p-8 rounded-3xl gap-6">
      <img src={Logo} alt="" className="w-[30%]" />
      <h1 className="text-left text-lg text-gray-500">Select the user you want to register as.</h1>
      <div className="w-full">
        <div className="w-full py-4">
          <input
            name="farmer"
            type="button"
            className="w-full  border border-gray-500 hover:border-gray-900 hover:shadow-md hover:bg-[#006838] hover:scale-105 hover:text-white font-medium  py-8 px-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl"
            placeholder="Firstname"
            value="Farmer"
            onClick={() => handleUserTypeSelection("FARMER")}
            required
          />
        </div>
        <div className="w-full py-4">
          <input
            name="user"
            type="button"
            className="w-full  border border-gray-500 hover:border-gray-900 hover:shadow-md hover:bg-[#006838] hover:scale-105 hover:text-white font-medium  py-8 px-3 leading-tight focus:outline-none focus:shadow-outline rounded-xl"
            placeholder="Firstname"
            value="User"
            onClick={() => handleUserTypeSelection("USER")}
            required
          />
        </div>
      </div>
    </div>
  );
}

export default UserType;
