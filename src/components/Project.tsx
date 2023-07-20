export const Project: React.FC<{ name: string; repo: string; project: string; img: string;}> = ({ name, repo, project, img }) => {
    return (
        <section className="bg-black h-[400px] w-[500px] rounded-lg">
            <div>
                <h1 className="text-center text-white">{name}</h1>
            </div>
            <img 
                src={img} 
                className="h-[70%] object-contain bg-neutral-800"
            ></img>
            <div className="flex w-full h-[95px] items-center justify-center gap-10">
                <button onClick={() => location.href = repo} className="rounded-md bg-neutral-800 text-white w-[140px] h-[50px] border-2 border-neutral-600 transition-colors duration-300 hover:bg-neutral-600">Repositório</button>
                <button onClick={() => location.href = project} className="rounded-md bg-neutral-800 text-white w-[140px] h-[50px] border-2 border-neutral-600 transition-colors duration-300 hover:bg-neutral-600">Projeto</button>
            </div>
        </section>
    )
}