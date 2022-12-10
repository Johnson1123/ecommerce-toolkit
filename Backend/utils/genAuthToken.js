import jwt from 'jsonwebtoken'

const genAuthToken = (user) => {
     const token = jwt.sign({
          _id: user._id,
          name: user.name,
          email: user.email
     }, 'johnson1123');
     return token;
}
export default genAuthToken;