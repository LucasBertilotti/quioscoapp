import Layout from "@/layout/layout";
import useQuiosco from "@/hooks/useQuiosco";
import ResumenPedido from "@/components/ResumenPedido";
import { useRouter } from "next/router";


const Resumen = () => {
    const { pedido } = useQuiosco();
    const router = useRouter();
    return(
        <Layout pagina="Resumen">
            <h1 className="text-4xl font-black">Resumen</h1>

            {pedido.length === 0 ? (
                <div className="flex flex-col items-center my-10">
                    <p className="text-3xl">Agregue productos a su pedido</p>
                    <button 
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 uppercase font-bold"
                        onClick={() => router.push("/")}
                    >
                        Ir al Menú
                    </button>
                </div>
            ) : (
                <>
                    <p className="text-2xl my-10">Revisa tu pedido</p>
                    {pedido.map(producto => (
                        <ResumenPedido 
                            key={producto.id}
                            producto={producto}
                            />
                    ))}
                </>
            )}
        </Layout>
    );
}

export default Resumen;