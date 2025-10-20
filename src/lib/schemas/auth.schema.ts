import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must not exceed 50 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string(),
    profileImage: z
      .instanceof(File)
      .optional()
      .refine(
        (file) => {
          if (!file) return true;
          return file.size <= 5 * 1024 * 1024; // 5MB
        },
        { message: "Image must be less than 5MB" }
      )
      .refine(
        (file) => {
          if (!file) return true;
          return ["image/jpeg", "image/png", "image/webp"].includes(file.type);
        },
        { message: "Only .jpg, .png, and .webp formats are supported" }
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const otpSchema = z.object({
  otp: z.string().length(6, "Please enter all 6 digits"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type OTPFormData = z.infer<typeof otpSchema>;
