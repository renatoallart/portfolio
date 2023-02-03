import { useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z
    .string({
      required_error: "Name's required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, {
      message: "The name must've least 3 characters",
    }),
  email: z.string().email({ message: "Email not valid" }),
  message: z.string().min(10, {
    message: "Message must've least 10 characters",
  }),
})

type TFormSchema = z.infer<typeof formSchema>

export function useSendEmail() {
  const form = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit() {
    if (!form.current) return
    // it was needed add NEXT_PUBLIC to the Browsers the access the env.local
    //https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables
    emailjs
      .sendForm(
        String(process.env.NEXT_PUBLIC_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
        form.current,
        String(process.env.NEXT_PUBLIC_PUBLIC_KEY)
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    alert("email send with successes!")
    reset({ email: "", name: "", message: "" })
  }

  return { register, handleSubmit, onSubmit, form, errors }
}
