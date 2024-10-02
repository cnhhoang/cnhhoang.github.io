"use client"

import { useEffect, useState } from "react";

import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
import IncrementingNumber from "./incrementing-number";


// ====================================================================================================
interface ChartProps {
  solve: number;
  total: number;
  title: string;
  color: string;
}

// ****************************************************************************************************
export function LabPieChart({solve, total, title, color}: ChartProps) {
  const chartData = [
    { entry: "solved", value: solve, fill: "var(--color-solved)" },
    { entry: "unsolved", value: total-solve, fill: "var(--color-unsolved)" },
  ]
  
  const chartConfig = {
    value: {
      label: "Labs",
    },
    solved: {
      label: "Solved",
      color: color,
    },
    unsolved: {
      label: "Unsolved",
      color: "hsl(var(--muted))",
    },
  } ;

  let description = "A donut chart with text";

  // **************************
  return (
    <Card className="flex flex-col border-0">
      <CardHeader className="items-center pb-0">
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="entry"
              innerRadius={60}
              outerRadius={75}
              strokeWidth={5}
              startAngle={90}
              endAngle={-270}
            >
            <Label
                content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                        <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        >
                        <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 12}
                            className="text-3xl font-bold"
                            fill={color}
                        >
                            {solve}
                        </tspan>
                        <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 18}
                            className="text-lg"
                            fill="white"
                        >
                            of {total} Labs
                        </tspan>
                        </text>
                    );
                    }
                }}
            />

            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex text-xl items-center gap-2 font-medium leading-none">
          {title}
        </div>
        <div className="flex items-center gap-2 font-medium leading-none text-transparent">
          {description}
        </div>
      </CardFooter>
    </Card>
  )
}

// ====================================================================================================
interface LabBarChartProps {
  solved: number;
  total: number;
}

// ****************************************************************************************************
export function LabBarChart({ solved, total }: LabBarChartProps) {
  const percentage = Math.round((solved / total) * 100);
  const animationDuration = 700;
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative h-4 w-full bg-black rounded-full overflow-hidden">
      <div  className="bg-yellow-400 h-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedWidth}%` }}
      />

      <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-sm font-bold ">
        <IncrementingNumber number={percentage} delay={1500}/>%
      </div>
    </div>
  );
}
