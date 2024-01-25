import { ResponsivePie } from '@nivo/pie'
import { useMemo } from 'react'
import { getData } from './data'

function Chart() {
  // Create a state for the data
  const data = useMemo(() => getData(), [])

  return (
    <div className='relative'>
      <div className='rotate-[-6deg] h-[400px] w-[400px] '>
        <ResponsivePie
          data={data}
          padAngle={0}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          borderWidth={0}
          cornerRadius={0}
          borderColor={(datum) => datum.data.color}
          colors={(datum) => datum.data.color}
          startAngle={0}
          endAngle={360}
          innerRadius={0.75}
          arcLabel={(datum) => {
            return datum.data.id % 2 === 0 ? datum.data.label : ''
          }}
          arcLabelsRadiusOffset={-0.3}
          enableArcLinkLabels={false}
          isInteractive={false}
          animate={false}
        />
      </div>

      {/* Create two dashed lines that divide the pie chart into 4 quadrants and inside each quadrant display the label for that quadrant (morning, afternoon, evening, night) */}
      <div className='absolute inset-0 z-[9999] items-center justify-center flex'>
        <div className='w-0.5 h-full border border-dashed border-black  absolute rotate-45'></div>
        <div className='h-0.5 w-full border border-dashed border-black absolute rotate-45'></div>

        <div className='absolute top-0 flex justify-center'>
          <div className='text-black text-base'>Night</div>
        </div>

        <div className='absolute right-0 flex justify-center items-center rotate-[270deg]'>
          <div className='text-black text-base'>Morning</div>
        </div>

        <div className='absolute bottom-0 flex justify-center'>
          <div className='text-black text-base'>Afternoon</div>
        </div>

        <div className='absolute left-0 flex justify-center rotate-[270deg]'>
          <div className='text-black text-base'>Evening</div>
        </div>
      </div>
    </div>
  )
}

export default Chart
