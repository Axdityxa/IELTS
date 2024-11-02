"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Component() {
  const metrics = [
    { title: "ENTITY", current: 1, total: 2000, label: "Records" },
    { title: "AUTOMATION", current: 0, total: 2, label: "Records" },
    { title: "ROUTINGENGINE", current: 0, total: 2, label: "Records" },
    { title: "CUSTOMIZATIONFIELD", current: 0, total: 10, label: "Records" },
    { title: "CUSTOMIZATIONLAYOUT", current: 0, total: 10, label: "Records" },
    { title: "CURRENCY", current: 0, total: 2, label: "Records" },
    { title: "USERS", current: 1, total: 2, label: "Records" },
    { title: "PIPELINE", current: 0, total: 2, label: "Records" },
  ]

  return (
    <div className="p-6">
      <div className="mb-6 border-b">
        <Tabs defaultValue="usage">
          <TabsList>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="usage">Usage Statistics</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Usage Statistics</h2>
          <p className="text-sm text-muted-foreground">
            Date shown until: 11/1/2024 | Next renewal date: NA
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full flex flex-col items-center justify-center">
                <div className="w-[160px] h-[160px]">
                  <CircularProgressbar
                    value={(metric.current / metric.total) * 100}
                    text={`${metric.current}`}
                    styles={buildStyles({
                      pathColor: `rgba(62, 152, 199, ${metric.current / metric.total * 100})`,
                      textColor: '#333',
                      trailColor: '#d6d6d6',
                    })}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm text-blue-600">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">
                    free of {metric.total}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
