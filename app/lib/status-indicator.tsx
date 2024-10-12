// ====================================================================================================
interface StatusIndicatorProps {
  status: string;
  size?: string;   
}
    
// ****************************************************************************************************
export default function StatusIndicator({ status, size="4"}: StatusIndicatorProps) 
{
  let effect: string = " bg-gray-400 ";

  if (status === "pending")
    effect = " animate-pulse bg-amber-500 ";
  if (status === "active")
    effect = " animate-pulse bg-green-500 ";
  if (status === "completed")
    effect = " animate-[ping_2s_ease-in-out] animation-iteration-count[1] bg-blue-500 ";
  
  return (
    <div className={`h-${size} w-${size} rounded-full ` + effect} />
  );
};