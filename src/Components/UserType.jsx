function UserType({ setType, setStage }) {
  const handleUserTypeSelection = (selectedType) => {
    setType(selectedType);
    setStage('form')
  };
  return (
    <div className="flex flex-col w-full h-fit my-24">
      <div className="w-6/12">
        <input
          name="firstName"
          type="button"
          className="w-full  border border-black py-8 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Firstname"
          value="Farmer"
          onClick={()=>handleUserTypeSelection("FARMER")}
          required
        />
      </div>
      <div className="w-6/12 py-4">
        <input
          name="firstName"
          type="button"
          className="w-full  border border-black py-8 px-3 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Firstname"
          value="User"
          onClick={()=>handleUserTypeSelection("USER")}
          required
        />
      </div>
    </div>
  );
}

export default UserType;
