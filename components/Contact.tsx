import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import send_email from "@/public/icons/send_email.png";
import send from "@/public/hovers/send.png";
import emailjs from "@emailjs/browser";

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
});

type TFormSchema = z.infer<typeof formSchema>;
export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const form = useRef(null);
  const [hoverIcon, setHoverIcon] = useState(false);

  function onSubmit() {
    if (!form.current) return;
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 mb-20 text-white "
    >
      <h2 className="text-xl font-semibold md:text-4xl ">
        Write me a Message 👇{" "}
      </h2>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:mt-[40px] items-center justify-center gap-3"
      >
        <label className="self-start md:text-xl" htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="self-start md:w-[593px] md:h-[68px] rounded-sm text-black  outline-none "
        />
        {errors?.name && <p className="text-red-500">{errors.name.message}</p>}
        <label className="self-start md:text-xl" htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          {...register("email")}
          type="text"
          className="self-start text-black md:w-[593px] md:h-[68px] rounded-sm "
        />
        {errors?.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <label className="self-start md:text-xl" htmlFor="message">
          Message
        </label>
        <textarea
          {...register("message")}
          className="self-start text-black md:w-[776px] md:h-[317px] rounded-sm "
          id="message"
          cols={30}
          rows={6}
        ></textarea>
        {errors?.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
        <button
          onMouseOver={() => setHoverIcon(true)}
          onMouseOut={() => setHoverIcon(false)}
          type="submit"
          className="flex justify-center font-semibold items-center text-xl gap-12 text-black w-[300px] h-[65px] md:w-[776px] md:h-92px mt-4 rounded-full bg-brand hover:text-white"
        >
          Submit
          <Image
            src={hoverIcon ? send : send_email}
            width={54}
            height={48}
            alt={"send_email"}
          />
        </button>
      </form>
    </section>
  );
}
