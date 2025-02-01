import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FollowUp {
  id: number;
  date: string;
  description: string;
}

interface Measure {
  id: number;
  name: string;
  followUpInCharge: string;
  responsiblePerson: string;
  followUps: FollowUp[];
}

interface MitigationPlan {
  name: string;
  date: string;
  measures: Measure[];
}

const data: MitigationPlan[] = [
  {
    name: "Plan 1",
    date: "2023-01-01",
    measures: [
      {
        id: 1,
        name: "Measure 1",
        followUpInCharge: "John Doe",
        responsiblePerson: "Jane Smith",
        followUps: [
          { id: 1, date: "2023-01-01", description: "Follow-Up A - Description" },
          { id: 2, date: "2023-01-02", description: "Follow-Up B - Description" },
        ],
      },
      {
        id: 2,
        name: "Measure 2",
        followUpInCharge: "Alice Johnson",
        responsiblePerson: "Bob Brown",
        followUps: [
          { id: 3, date: "2023-01-03", description: "Follow-Up C - Description" },
          { id: 4, date: "2023-01-04", description: "Follow-Up D - Description" },
        ],
      },
    ],
  },
  {
    name: "Plan 2",
    date: "2023-02-01",
    measures: [
      {
        id: 3,
        name: "Measure 3",
        followUpInCharge: "Carlos Marquez",
        responsiblePerson: "Ana Gomez",
        followUps: [
          { id: 5, date: "2023-02-01", description: "Follow-Up E - Description" },
        ],
      },
    ],
  },
];

const MitigationPlanTable = () => {
  const [hoveredMeasure, setHoveredMeasure] = useState<Measure | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMeasure, setSelectedMeasure] = useState<Measure | null>(null);

  const handleMeasureClick = (measure: Measure) => {
    setSelectedMeasure(measure);
    setDialogOpen(true);
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plan Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Measures</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((plan) => (
            <TableRow key={plan.name}>
              <TableCell>{plan.name}</TableCell>
              <TableCell className="text-right">{plan.date}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                      Measures
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {plan.measures.map((measure) => (
                      <DropdownMenuItem
                        key={measure.id}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleMeasureClick(measure)}
                        onMouseEnter={() => setHoveredMeasure(measure)}
                        onMouseLeave={() => setHoveredMeasure(null)}
                      >
                        {measure.name}
                        {hoveredMeasure?.id === measure.id && (
                          <div className="absolute top-0 left-full w-40 bg-white border border-gray-200 rounded shadow-lg z-20">
                            {measure.followUps.map((followUp) => (
                              <div key={followUp.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                                {followUp.date}
                                <div className="text-xs text-gray-500">
                                  {followUp.description}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dialogOpen && selectedMeasure && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-30">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Measure Details</h2>
            <p>
              <strong>Name:</strong> {selectedMeasure.name}
            </p>
            <p>
              <strong>Follow-Up In Charge:</strong> {selectedMeasure.followUpInCharge}
            </p>
            <p>
              <strong>Responsible Person:</strong> {selectedMeasure.responsiblePerson}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MitigationPlanTable;
