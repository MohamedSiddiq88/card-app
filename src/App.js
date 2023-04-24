import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {
     plan: "FREE",
      price: 0,
      list: [
        ['Single User', true],
        ['5GB Storage', true],
        ['Unlimited Public Projects', true],
        ['Community Access', true],
        ['Unlimited Private Projects', false],
        ['Dedicated Phone Support', false],
        ['Free Subdomain', false],
        ['Monthly Status Reports', false]
      ]
    },
    {
      plan: "PLUS",
      price: 9,
      list: [
        ['5 Users', true],
        ['50GB Storage', true],
        ['Unlimited Public Projects', true],
        ['Community Access', true],
        ['Unlimited Private Projects', true],
        ['Dedicated Phone Support', true],
        ['Free Subdomain', true],
        ['Monthly Status Reports', false]
      ]
    },
    {
      plan: "PRO",
      price: 49,
      list: [  ['Unlimited Users', true],
      ['150GB Storage', true],
      ['Unlimited Public Projects', true],
      ['Community Access', true],
      ['Unlimited Private Projects', true],
      ['Dedicated Phone Support', true],
      ['Unlimited Free Subdomains', true],
      ['Monthly Status Reports', true]
    ]
    }
  ];

  // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App fluid-container">
      {data.map((card, index) => (
        <Profile
          key={index}
          plan={card.plan}
          price={card.price}
          list={card.list}
        />
      ))}
    </div>
  );
}

export default App;

// create a new component

function Profile({ plan,price, list }) {
  return (
    <div className="col-md-4">
      <div className="card">
      <p className='plan'>{plan}</p>
      <span className="price">${price}<span className='permonth'>/month</span></span>
      <hr></hr>
      <ul>
        {list.map((item, index,arr) => (
          <li key={index}
           style={{color: item[1] ? 'black' : 'grey'}}
           >{item[1]?<i class="fa fa-check" aria-hidden="true"></i>
           :<i class="fa fa-times" aria-hidden="true"></i>
          }  {item}
            </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary">Button</button>
      </div>
    </div>
  );
}
