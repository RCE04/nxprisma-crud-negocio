import Link from 'next/link'
import Proveedor from '@/components/Proveedor'
import { getProveedores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const proveedores = await getProveedores()
    // console.log(proveedores);

    return (
        <div>
            <Link className='enlace' href="/proveedores/new"> Nuevo proveedor </Link>
            {
                proveedores.map((proveedor) => (
                    <Proveedor key={proveedor.id} proveedor={proveedor} >
                        <Link className='enlace' href={`/proveedores/view/${proveedor.id}`} >
                            Ver proveedor
                        </Link>
                        <Link className='enlace' href={`/proveedores/edit/${proveedor.id}`} >
                            Editar proveedor
                        </Link>
                        <Link className='enlace' href={`/proveedores/delete/${proveedor.id}`} >
                            Eliminar proveedor
                        </Link>
                    </Proveedor>
                ))
            }
        </div>
    )
}
