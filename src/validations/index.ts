import * as yup from "yup";
import { EMAIL_REGEX, INVALID_EMAIL, PASSWORD } from "../constants";
import { requiredMessage } from "../utils";

const passwordSchema = { password: yup.string().required(requiredMessage(PASSWORD)) }
const emailSchema = () => yup.string().required(requiredMessage('Email')).matches(EMAIL_REGEX, INVALID_EMAIL)

export const loginSchema = yup.object({
  email: emailSchema(),
  ...passwordSchema
})
