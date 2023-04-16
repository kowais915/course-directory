import Card from '../../components/Card'
import Link from 'next/link'


export const getStaticProps = async () => {
 
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {courses: data}
    }

    

}

const Courses = ({courses}) => {
    return ( 
        <>
    
        <div className="list">
            {courses.map(course => {
                return (
                    <Link href={"courses/" + course.id} key={course.id}>
                        <Card title={course.title} body={course.body} />
                    </Link>
                )
            })}
        </div>
       
        </>
     );
}
 
export default Courses;