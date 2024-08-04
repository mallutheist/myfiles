import User from "../models/User.js";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: 'ok', users });
    }
    catch (error) {
        return res.status(200).json({ message: 'error mone', error });
    }
};
export const signupUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.clearCookie(COOKIE_NAME, {
            domain: 'localhost',
            httpOnly: true,
            signed: true,
            path: '/'
        });
        const token = createToken(user._id.toString(), user.email, '7d');
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: '/',
            domain: 'localhost',
            expires,
            httpOnly: true,
            signed: true
        });
        return res.status(200).json({ message: 'ok', id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'error mone', error });
    }
};
export const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json('user not registered');
        }
        const ispwdCorrect = await compare(password, user.password);
        if (!ispwdCorrect) {
            return res.status(403).json('Password is incorrect');
        }
        res.clearCookie(COOKIE_NAME, {
            domain: 'localhost',
            httpOnly: true,
            signed: true,
            path: '/'
        });
        const token = createToken(user._id.toString(), user.email, '7d');
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, {
            path: '/',
            domain: 'localhost',
            expires,
            httpOnly: true,
            signed: true
        });
        return res.status(200).json({ message: 'ok', id: user._id.toString() });
    }
    catch (error) {
        return res.status(200).json({ message: 'error mone', error });
    }
};
//# sourceMappingURL=user-controllers.js.map