import send_email from "@/public/icons/send_email.png"
import send from "@/public/hovers/send.png"
import { useIconState } from "@/hooks/useIconState"
import { useSendEmail } from "@/hooks/useSendEmail"
import Image from "next/image"

export function Contact() {
  const { handleSubmit, onSubmit, register, form, errors } = useSendEmail()
  const { isHoverIcon, handleHoverIcon } = useIconState()

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 mt-6 text-white mb-28 "
    >
      <h2 className="text-xl font-semibold md:text-4xl ">
        Write me a Message 👇
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
          onMouseOver={() => handleHoverIcon(true)}
          onMouseOut={() => handleHoverIcon(false)}
          type="submit"
          className="flex justify-center font-semibold items-center text-xl gap-12 text-black w-[300px] h-[65px] md:w-[776px] md:h-92px mt-4 rounded-full bg-brand hover:text-white"
        >
          Submit
          <Image
            src={isHoverIcon ? send : send_email}
            width={54}
            height={48}
            alt={"send Email"}
          />
        </button>
      </form>
    </section>
  )
}
