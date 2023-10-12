import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"


const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo ,id } = props.datos
    const { colaboradores, eliminarColaborador,actualizarColorEquipos, meGusta } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario,0.4)
    }
    //console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input className="cambioColorEquipo"type="color" 
                value={hexToRgba(colorPrimario,0.4)}
                onChange={ (evento) =>
                    {

                    actualizarColorEquipos(evento.target.value,id)

                    }} 
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            meGusta={meGusta}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo