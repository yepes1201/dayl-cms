import { Button } from './ui/button'

export function Footer() {
  return (
    <footer className="bg-dark w-full [&>*]:text-light flex flex-col items-center justify-center pt-12 px-4 rounded-t-4xl">
      <section className="flex flex-col md:flex-row gap-4 justify-between w-full items-center border-b border-grey pb-12 px-12">
        <p className="text-8xl font-normal">
          Let's <br /> talk
        </p>
        <form className="flex flex-col gap-4">
          <Input
            label="Nombre y apellido"
            id="name"
            type="text"
            placeholder="Daniel Yepes"
            required
          />
          <Input label="Correo" id="email" type="email" placeholder="daniel@gmail.com" required />
          <Textarea label="Mensaje" id="message" required placeholder="Escribe tu mensaje aquí" />
          <Button className="self-end" type="submit">
            Enviar
          </Button>
        </form>
      </section>
      <section className="flex flex-row gap-2 justify-between w-full items-center py-8">
        <p>© Daniel Yepes {new Date().getFullYear()}</p>
        <p>contact@danielyepes.com</p>
        <ul className="flex flex-row gap-4">
          <li>
            <a href="https://www.linkedin.com/in/danielyepes/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/yepes1201">GitHub</a>
          </li>
          <li>
            <a href="https://www.x.com/daniely1201/">X (Twitter)</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

const Input = ({
  label,
  id,
  type,
  placeholder,
  required = false,
}: {
  label: string
  id: string
  type: string
  placeholder: string
  required?: boolean
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        className="border-b border-grey pb-2 text-light outline-none focus:border-light"
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {required && <span className="text-grey text-xs">*Campo requerido</span>}
    </div>
  )
}

const Textarea = ({
  label,
  id,
  placeholder,
  required = false,
}: {
  label: string
  id: string
  placeholder: string
  required?: boolean
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="border border-grey p-2 rounded-lg text-light outline-none focus:border-light"
        id={id}
        placeholder={placeholder}
      />
      {required && <span className="text-grey text-xs">*Campo requerido</span>}
    </div>
  )
}
