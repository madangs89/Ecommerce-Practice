import Address from "../modles/adress.model.js";

export const addAddress = async (req, res) => {
  const user = req.user;
  const {
    fullName,
    phoneNumber,
    isDefault,
    pinCode,
    streetAddress,
    state,
    city,
  } = req.body;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    if (!phoneNumber || !streetAddress || !city || !state || !pinCode) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const address = await Address.create({
      userId: user.id,
      fullName,
      phoneNumber,
      isDefault: isDefault ? isDefault : false,
      pinCode,
      streetAddress,
      state,
      city,
    });
    res.status(201).json({
      message: "Address created successfully",
      success: true,
      data: address,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getAddresses = async (req, res) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const addresses = await Address.find({ userId: user.id });
    res.status(200).json({
      message: "Addresses fetched successfully",
      success: true,
      addresses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const updateAddress = async (req, res) => {
  const user = req.user;
  const addressId = req.params.id;
  const {
    fullName,
    phoneNumber,
    isDefault,
    pinCode,
    streetAddress,
    state,
    city,
  } = req.body;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const address = await Address.findById(addressId);
    if (!address) {
      return res
        .status(404)
        .json({ message: "Address not found", success: false });
    }
    if (address.userId.toString() !== user.id.toString()) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    address.fullName = fullName || address.fullName;
    address.phoneNumber = phoneNumber || address.phoneNumber;
    address.isDefault = isDefault || address.isDefault;
    address.pinCode = pinCode || address.pinCode;
    address.streetAddress = streetAddress || address.streetAddress;
    address.state = state || address.state;
    address.city = city || address.city;
    await address.save();
    res.status(200).json({
      message: "Address updated successfully",
      success: true,
      data: address,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const deleteAddress = async (req, res) => {
  const user = req.user;
  const addressId = req.params.id;
  try {
    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const address = await Address.findById(addressId);
    if (!address) {
      return res
        .status(404)
        .json({ message: "Address not found", success: false });
    }
    if (address.userId.toString() !== user.id.toString()) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    await Address.findByIdAndDelete(addressId);
    res.status(200).json({
      message: "Address deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};
