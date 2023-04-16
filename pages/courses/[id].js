export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    const paths = data.map(course=>{
        return {
            params: {id: course.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}
import styles from '../../styles/Details.module.css'

export const getStaticProps = async (context)=>{
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const data = await res.json()

    return {
        props: {course: data}
    }
}

const Details = ({course}) => {
    return ( 
    <div className={styles.container}>
        <h1>Details</h1>
        <h3>{course.title}</h3>
        <p>
            {course.body}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis impedit vitae, hic eius reprehenderit quam alias nihil inventore consequuntur voluptates velit cum ratione eveniet. Ex ea exercitationem eaque nemo distinctio minima numquam incidunt fugiat! Modi, corporis! Fugit, laudantium. Ducimus, totam?
        </p>
    </div> 
    );
}
 
export default Details;