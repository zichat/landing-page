import {clients} from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) =>(
        <div key={client.id} {...client} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] my-2 sm:my-0`}>
          <img src={client.logo} alt={client.id} className="sm:w[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients