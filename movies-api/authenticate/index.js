import jwt from 'jsonwebtoken';
import User from '../api/users/userModel';

const authenticate = async (request, response, next) => {
    try { 
        const authHeader = request.headers.authorization;
        if (!authHeader) throw new Error('No authorization header');

        const token = authHeader.split(" ")[1];
        if (!token) throw new Error('Bearer token not found');

        const decoded = await jwt.verify(token, process.env.SECRET); 
        console.log(decoded);

        // Assuming decoded contains a username field
        const user = await User.findByUserName(decoded.username); 
        if (!user) {
            throw new Error('User not found');
        }
        // Optionally attach the user to the request for further use
        request.user = user; 
        next();
    } catch(err) {
        next(new Error(`Verification Failed: ${err.message}`));
    }
};

export const registerUser = async (request, response, next) => {
    try {
        const { username, password } = request.body;

        // Pass checker
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            return response.status(400).json({
                error: 'Password must be at least 8 characters long and include at least one letter, one digit, and one special character.'
            });
        }

        // Checking for existing usernames
        const existingUser = await User.findByUserName(username);
        if (existingUser) {
            return response.status(400).json({ error: 'Username already in use' });
        }

        // Create new user
        const newUser = new User({ username, password });
        await newUser.save();

        response.status(201).json({ message: 'User registered!' });
    } catch (err) {
        next(new Error(`Registration failed: ${err.message}`));
    }
};

export default authenticate;
