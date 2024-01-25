import Chart from './chart'

function App() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='shadow-xl p-5 flex flex-col rounded-xl space-y-10'>
        <div className='flex items-center justify-between'>
          <div />

          <div className='text-xl font-bold'>Flow Peak</div>

          <div className='h-5 w-5 rounded-full flex items-center justify-center bg-[#6C63FF] text-white text-sm'>
            i
          </div>
        </div>

        <Chart />

        <div className='flex items-center justify-end'>
          <button className='w-1/3 py-3 rounded-lg bg-[#E0E0E0]'>April</button>
        </div>
      </div>
    </div>
  )
}

export default App
