import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Error.module.css'

const Error = () => {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])
    return ( 
        <div className={styles.container}>
            <Image src="/4041.jpg" height={400} width={400}></Image>
           
            <Link href="/" className={styles.link}> Home</Link> 
        </div>
     );
}
 
export default Error;