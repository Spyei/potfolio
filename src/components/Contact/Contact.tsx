import { FC } from "react"

const Contact: FC = () => {
    return (
        <section className="flex flex-col h-[102vh] justify-center items-center text-white w-[100vw] gap-[100px]">
            <div className="flex justify-center text-6xl font-extrabold flex-col items-center gap-2">
                <h1>Contato</h1>
                <div className="bg-white w-full h-[5px] rounded-lg"/>
            </div>
            <div className="flex justify-center items-center w-[40%] my:w-[90%]">
                <form method="POST" action="https://getform.io/f/cf1f145d-e3f5-40a6-b00d-7ee66aebbbd5" className="flex flex-col w-full h-full gap-3">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Nome"
                        className="p-2 bg-neutral-900 border-2 rounded-lg border-neutral-700 focus:outline-none focus:border-neutral-300 duration-300 transition-colors"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail"
                        className="p-2 bg-neutral-900 border-2 rounded-lg border-neutral-700 focus:outline-none focus:border-neutral-300 duration-300 transition-colors"
                    />
                    <textarea
                        name="message"
                        placeholder="Mensagem"
                        rows={10}
                        required
                        className="p-2 bg-neutral-900 border-2 rounded-lg border-neutral-700 focus:outline-none focus:border-neutral-300 duration-300 transition-colors"
                    />
                    <button type="submit" className="w-full border-2 border-neutral-700 rounded-lg bg-neutral-900 p-2 transition-colors hover:bg-neutral-700">Enviar</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;