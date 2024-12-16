import Account from "../Validations/UserValidtaions.js";

export const addAccount = async (request, response) => {
  try {
    const exist = await Account.findOne({ password: request.body.password });
    if (exist) {
      response.status(200).json({ msg: "Account Alwrady exist !" });
      return;
    }
    const newAccount = new Account(request.body);
    await newAccount.save();
    response.status(200).json({ msg: "You are succesfyllu registerd" });
    
    return;
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const LoginAccount = async (request, response) => {
  try {
    // Find the user by username or email (assuming you have a username or email field)
    const checkUser = await Account.findOne({email : request.body.email, password : request.body.password});

    if (!checkUser) {
      response.status(200).json({ msg: "Invalid Credential" });
      return;
    }

    // Check if the provided password matches the stored password
    if (checkUser.password == request.body.password || checkUser.email == request.body.email) {


      const { password, _id, aggree, __v, ...userInfo } =checkUser.toObject(); // Convert to plain object and destructure

      response.status(200).json(userInfo);

      return;
    } else {
      response.status(200).json({ msg: "Please Check The Fileds Poperly" });
      return;
    }
  } catch (error) {
    return response.status(500).json(error.message);
  }
};