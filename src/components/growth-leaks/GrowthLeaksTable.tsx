import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  ColumnDef,
  flexRender
} from '@tanstack/react-table';
import { GrowthLeak } from '../../data/leakData';
import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import { DifficultyBadge, TimeframeBadge, RoleBadge } from './BadgeComponents';
import SeverityIndicator from './SeverityIndicator';

interface GrowthLeaksTableProps {
  data: GrowthLeak[];
}

const GrowthLeaksTable: React.FC<GrowthLeaksTableProps> = ({ data }) => {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'impactScore', desc: true }
  ]);
  const [columnVisibility, setColumnVisibility] = useState({
    role: true,
    difficulty: false,
    timeframe: false,
    impactScore: true,
    impactMetric: false
  });

  const columns: ColumnDef<GrowthLeak>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <button
          className="flex items-center space-x-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Leak Name</span>
          <ArrowUpDown className="h-4 w-4" />
        </button>
      ),
      cell: ({ row }) => (
        <div className="flex items-center">
          <span className="text-xl mr-2">{row.original.emoji}</span>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {row.original.name}
            </div>
            <div className="text-sm text-gray-500">{row.original.description}</div>
          </div>
        </div>
      )
    },
    {
      accessorKey: 'impactScore',
      header: ({ column }) => (
        <button
          className="flex items-center space-x-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Impact</span>
          <ArrowUpDown className="h-4 w-4" />
        </button>
      ),
      cell: ({ row }) => <SeverityIndicator score={row.original.impactScore} />,
      enableHiding: true
    },
    {
      accessorKey: 'impactMetric',
      header: ({ column }) => (
        <button
          className="flex items-center space-x-2"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Metric</span>
          <ArrowUpDown className="h-4 w-4" />
        </button>
      ),
      cell: ({ row }) => (
        <div className="text-sm">
          <span className="font-semibold text-amber-500">
            {row.original.impactMetric.split(' ')[0]}
          </span>
          <span className="text-gray-900">
            {' ' + row.original.impactMetric.split(' ').slice(1).join(' ')}
          </span>
        </div>
      ),
      enableHiding: true
    },
    {
      accessorKey: 'responsibleRole',
      header: 'Role',
      cell: ({ row }) => <RoleBadge role={row.original.responsibleRole} />,
      enableHiding: true
    },
    {
      accessorKey: 'difficulty',
      header: 'Difficulty',
      cell: ({ row }) => <DifficultyBadge difficulty={row.original.difficulty} />,
      enableHiding: true
    },
    {
      accessorKey: 'timeframe',
      header: 'Timeframe',
      cell: ({ row }) => <TimeframeBadge timeframe={row.original.timeframe} />,
      enableHiding: true
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <button
          onClick={() => navigate(`/growth-leaks/${row.original.pillar.toLowerCase()}/${row.original.id}`)}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get Fix Strategy
        </button>
      )
    }
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-end gap-4">
          <span className="text-sm font-medium text-gray-700">Show/Hide Columns:</span>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, impactScore: !prev.impactScore }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.impactScore
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Impact Score
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, impactMetric: !prev.impactMetric }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.impactMetric
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Impact Metric
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, role: !prev.role }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.role
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Role
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, difficulty: !prev.difficulty }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.difficulty
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Difficulty
          </button>
          <button
            onClick={() => setColumnVisibility(prev => ({ ...prev, timeframe: !prev.timeframe }))}
            className={`px-3 py-1 rounded text-sm ${
              columnVisibility.timeframe
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Timeframe
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {table.getHeaderGroups().map(headerGroup => (
                headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GrowthLeaksTable;