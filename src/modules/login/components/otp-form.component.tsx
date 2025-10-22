"use client";

import React from "react";
import { useLogin } from "../hooks/useLogin.hook";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OTPFormData, otpSchema } from "@/lib/schemas/auth.schema";
import { slideVariants } from "../utils/transition.util";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function OtpForm() {
  const {
    direction,
    navigateBackFromOTP,
    registeredEmail,
    handleOTPVerify,
    handleResendOTP,
  } = useLogin();
  const otpForm = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });
  return (
    <motion.div
      key="otp"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <CardHeader className="text-center space-y-3">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={navigateBackFromOTP}
            className="absolute left-4 top-4"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <CardTitle className="text-3xl font-bold flex-1">
            Verify Email
          </CardTitle>
        </div>
        <CardDescription className="text-base">
          We sent a code to {registeredEmail}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...otpForm}>
          <form
            onSubmit={otpForm.handleSubmit(handleOTPVerify)}
            className="space-y-6"
          >
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                        if (value.length === 6) {
                          otpForm.handleSubmit(handleOTPVerify)();
                        }
                      }}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" size="lg">
              Verify Account
            </Button>
          </form>
        </Form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Didn't receive the code?
          </p>
          <Button
            variant="ghost"
            onClick={handleResendOTP}
            className="text-primary hover:text-primary/90"
          >
            Resend Code
          </Button>
        </div>
      </CardContent>
    </motion.div>
  );
}
