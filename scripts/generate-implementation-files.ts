import { growthLeaks } from '../src/data/leakData.js';
import fs from 'fs/promises';
import path from 'path';

const generateImplementationContent = (leak) => {
  return {
    title: `${leak.name} Implementation`,
    finding: {
      videoUrl: `https://thrivestack.io/tutorials/finding-${leak.id}`,
      metrics: [
        `${leak.impactMetric}`,
        `${leak.pillar} performance indicators`,
        'Implementation success rate',
        'ROI measurement'
      ],
      dashboardSetup: [
        `Navigate to ${leak.pillar} > Analytics`,
        'Set up metric tracking',
        'Configure alert thresholds',
        'Enable automated reporting'
      ]
    },
    fixing: {
      videoUrl: `https://thrivestack.io/tutorials/fixing-${leak.id}`,
      steps: [leak.solution],
      automation: {
        code: `export const ${leak.id}Alert = {
  trigger: '${leak.id}_detected',
  threshold: ${(leak.impactScore / 10).toFixed(1)},
  actions: [
    'analyze_impact',
    'notify_${leak.responsibleRole.toLowerCase().replace(/\s+/g, '_')}',
    'generate_fix_report'
  ]
};`,
        explanation: `This automation monitors ${leak.name.toLowerCase()} metrics and triggers appropriate actions when thresholds are exceeded.`
      }
    },
    preventing: {
      videoUrl: `https://thrivestack.io/tutorials/preventing-${leak.id}`,
      strategy: [
        'Implement continuous monitoring',
        'Set up early warning system',
        'Configure automated responses',
        'Enable trend analysis'
      ],
      bestPractices: [
        'Regular audits',
        'Performance tracking',
        'Automated intervention',
        'Weekly reviews'
      ]
    }
  };
};

async function generateFiles() {
  try {
    // Create the base directory if it doesn't exist
    const baseDir = 'src/data/thrivestack-data';
    await fs.mkdir(baseDir, { recursive: true });

    // Group leaks by pillar
    const leaksByPillar = growthLeaks.reduce((acc, leak) => {
      const pillar = leak.pillar.toLowerCase();
      if (!acc[pillar]) {
        acc[pillar] = [];
      }
      acc[pillar].push(leak);
      return acc;
    }, {});

    // Generate files for each pillar
    for (const [pillar, leaks] of Object.entries(leaksByPillar)) {
      const pillarDir = path.join(baseDir, pillar);
      await fs.mkdir(pillarDir, { recursive: true });

      for (const leak of leaks) {
        const content = generateImplementationContent(leak);
        const filePath = path.join(pillarDir, `${leak.id}.json`);
        
        try {
          await fs.writeFile(filePath, JSON.stringify(content, null, 2));
          console.log(`Generated: ${filePath}`);
        } catch (error) {
          console.error(`Error generating ${filePath}:`, error);
        }
      }
    }

    console.log('Implementation files generation completed successfully!');
  } catch (error) {
    console.error('Error during file generation:', error);
    process.exit(1);
  }
}

generateFiles();