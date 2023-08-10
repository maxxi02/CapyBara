import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


export default function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.item}>
          <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur recusandae, quas placeat velit animi ex. Deserunt nam voluptatibus, ipsa a repellendus enim, totam similique assumenda dolorem quod quisquam laudantium.</p>
          <div className={styles.author}>
            <Image className={styles.icon} src={"/rocio1.jpg"} alt='' width={50} height={50}/>
            <p>Rojan Doe</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image className={styles.img}
          src={"https://images.pexels.com/photos/15848886/pexels-photo-15848886/free-photo-of-sea-landscape-water-field.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt='' height={250} width={400} />
        </div>
      </div>
      <div className={styles.item2}>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae quae dolores maiores excepturi temporibus doloremque quasi, deserunt autem voluptate, rerum numquam accusantium, totam esse quidem magni quia sequi iure.
        Esse temporibus cupiditate eveniet ex at? Quam sunt error totam qui dolore laboriosam accusantium, facere quod eos officia, ipsa beatae! Velit minima aperiam amet commodi natus id dolorem eos quae!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam ab dolor quisquam nisi tenetur molestias voluptas non esse maiores distinctio praesentium, architecto eligendi omnis totam magnam modi quia deserunt?
        Reiciendis eveniet facere voluptatum rerum error quam accusantium minima, assumenda fuga ipsa, accusamus quaerat tenetur eligendi sequi magnam? At eligendi corrupti sint incidunt natus, quia impedit illum ullam culpa expedita.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores dolores id iste architecto ex, maxime placeat corrupti nam iure saepe fugiat? Sint et molestiae ipsam, in voluptatem fuga ullam.
        Corporis dolorum inventore quod at, optio eaque, ratione dolor accusantium quaerat tempore illum consequuntur in reprehenderit asperiores. Enim esse blanditiis, impedit quidem nesciunt dolores dolore maiores exercitationem itaque iusto iste!
        </p>
      </div>
    </div>
  )
}
