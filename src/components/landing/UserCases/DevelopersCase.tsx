
import { UserCase } from '../UseCasesTypes';

interface DevelopersProps {
  data: UserCase;
}

const DevelopersCase = ({ data }: DevelopersProps) => {
  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="bg-[#121416] text-white rounded-lg p-4 mt-4">
        <div className="flex items-center border-b border-gray-700 pb-3 mb-3">
          <div className="text-gray-300 italic flex-1">Search my mind...</div>
          <div className="text-gray-300">⌘K</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#1c1e20] rounded p-3">
            <div className="flex items-center mb-2">
              <div className="size-4 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-sm text-white">GitHub</span>
            </div>
            <p className="text-xs text-gray-300">Tailwind Labs</p>
          </div>
          <div className="bg-[#1c1e20] rounded p-3">
            <p className="bg-gray-700 text-xs text-white inline-block px-1 rounded mb-1">$5999</p>
            <div className="h-12 bg-gradient-to-b from-blue-900 to-blue-950 rounded"></div>
          </div>
          <div className="bg-[#1c1e20] rounded p-3">
            <div className="size-10 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersCase;
