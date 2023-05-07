import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {
      plan: "FREE",
      price: 0,
      list: [
        { item: 'Single User', included: true },
        { item: '5GB Storage', included: true },
        { item: 'Unlimited Public Projects', included: true },
        { item: 'Community Access', included: true },
        { item: 'Unlimited Private Projects', included: false },
        { item: 'Dedicated Phone Support', included: false },
        { item: 'Free Subdomain', included: false },
        { item: 'Monthly Status Reports', included: false }
      ]
    },
    {
      plan: "PLUS",
      price: 9,
      list: [
        { item: '5 Users', included: true },
        { item: '50GB Storage', included: true },
        { item: 'Unlimited Public Projects', included: true },
        { item: 'Community Access', included: true },
        { item: 'Unlimited Private Projects', included: true },
        { item: 'Dedicated Phone Support', included: true },
        { item: 'Free Subdomain', included: true },
        { item: 'Monthly Status Reports', included: false }
      ]
    },
    {
      plan: "PRO",
      price: 49,
      list: [
        { item: 'Unlimited Users', included: true },
        { item: '150GB Storage', included: true },
        { item: 'Unlimited Public Projects', included: true },
        { item: 'Community Access', included: true },
        { item: 'Unlimited Private Projects', included: true },
        { item: 'Dedicated Phone Support', included: true },
        { item: 'Unlimited Free Subdomains', included: true },
        { item: 'Monthly Status Reports', included: true }
      ]
    }
  ];
  // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App">

      <div className='container-fluid'>

      <div className='row'>

{/* divide into 3 column */}
{data.map((card, index) => (
  <div className='col-md-4'>
    <Profile
      key={index}
      plan={card.plan}
      price={card.price}
      list={card.list}
    />
  </div>

))}

</div>

      </div>

    </div>
  );
}

export default App;

// create a new component

function Profile({ plan, price, list }) {
  return (
    <div className="card">
      <p className='plan'>{plan}</p>
      <span className="price">${price}<span className='permonth'>/month</span></span>
      <hr></hr>

      {/* un-order list */}
      <ul>

        {/* list */}
        {list.map((item, index) => (
          <li key={index}

          // change the color based on the condtion
           style={{color: item.included ? 'black' : 'grey'}}>


          {/* chage the icon based on the condtion */}
          {item.included ? 
          <i class="fa fa-check" aria-hidden="true"></i>
           :<i class="fa fa-times" aria-hidden="true"></i>
          } 
          

          {/* print the item from the object */}
           {item.item}
            </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary">Button</button>
    </div>

  );
}
