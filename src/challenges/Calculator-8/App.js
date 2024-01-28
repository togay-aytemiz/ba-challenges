import './styles.css'

export default function App() {
  return (
    <div className='App'>
      <h1>İki Sayıyı Toplama</h1>

      <div className='number-inputs'>
        <input type='number' className='input is-large' placeholder='0' />
        <input type='number' className='input is-large' placeholder='0' />
      </div>

      <button>Topla!</button>

      <h2>0</h2>
    </div>
  )
}
