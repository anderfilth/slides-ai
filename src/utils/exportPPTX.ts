import PptxGenJS from 'pptxgenjs';
import { SlideData } from '../data/slides';

export const exportToPPTX = async (slides: SlideData[]) => {
  const pptx = new PptxGenJS();
  
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'AI Studio';
  pptx.company = 'AI Studio';
  pptx.title = 'Apresentação: Code Agents de IA';

  slides.forEach((slideData) => {
    const slide = pptx.addSlide();
    
    // Background
    slide.background = { color: '000000' };

    const pptxContent = slideData.pptx;
    if (!pptxContent) return;

    // Title
    if (pptxContent.title) {
      slide.addText(pptxContent.title, {
        x: 0.5,
        y: 0.5,
        w: '90%',
        h: 1,
        fontSize: 36,
        color: 'FFFFFF',
        bold: true,
        fontFace: 'Arial',
        align: slideData.layout === 'title' ? 'center' : 'left'
      });
    }

    // Subtitle for title slide
    if (slideData.layout === 'title' && pptxContent.subtitle) {
      slide.addText(pptxContent.subtitle, {
        x: 0.5,
        y: 2,
        w: '90%',
        h: 1,
        fontSize: 24,
        color: 'CCCCCC',
        align: 'center',
        fontFace: 'Arial'
      });
    }

    // Bullets
    if (pptxContent.bullets && pptxContent.bullets.length > 0) {
      const bulletOptions: PptxGenJS.TextPropsOptions = {
        x: 0.5,
        y: 1.5,
        w: slideData.layout === 'split' ? '45%' : '90%',
        h: 5,
        fontSize: 18,
        color: 'FFFFFF',
        bullet: true,
        fontFace: 'Arial',
        margin: [0, 0, 10, 0]
      };
      
      const textObjects = pptxContent.bullets.map(b => ({ text: b, options: { breakLine: true } }));
      slide.addText(textObjects, bulletOptions);
    }

    // Code
    if (pptxContent.code) {
      slide.addText(pptxContent.code, {
        x: 0.5,
        y: 1.5,
        w: '90%',
        h: 4,
        fontSize: 16,
        color: '00FF00',
        fontFace: 'Courier New',
        fill: { color: '111111' },
        valign: 'top',
        margin: 10
      });
    }

    // Table
    if (pptxContent.table) {
      const rows: PptxGenJS.TableRow[] = pptxContent.table.map((row, i) => {
        return row.map(cell => ({
          text: cell,
          options: {
            fill: { color: i === 0 ? '333333' : '111111' },
            color: i === 0 ? 'FFFFFF' : 'CCCCCC',
            bold: i === 0,
            fontSize: 14,
            fontFace: 'Arial',
            margin: 5
          }
        }));
      });
      
      slide.addTable(rows, {
        x: 0.5,
        y: 1.5,
        w: 9,
        border: { type: 'solid', color: '555555', pt: 1 }
      });
    }

    // Image (if it's a split layout, we can just add a placeholder or the actual image if it's a supported URL)
    // Note: pptxgenjs supports base64 or URLs, but URLs might fail due to CORS in browser.
    // Since we are running in browser, we will try to add it.
    if (pptxContent.image) {
      try {
        slide.addImage({
          path: pptxContent.image,
          x: 5.5,
          y: 1.5,
          w: 4,
          h: 4,
          sizing: { type: 'contain', w: 4, h: 4 }
        });
      } catch (e) {
        console.error("Failed to add image to PPTX", e);
      }
    }
  });

  await pptx.writeFile({ fileName: 'Apresentacao_Code_Agents.pptx' });
};
