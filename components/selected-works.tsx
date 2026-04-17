import Image from 'next/image';
import { ScrollReveal } from '@/components/scroll-reveal';
import { LightboxTrigger } from '@/components/lightbox';

type SectionImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect: string;
  colSpan: string;
};

type Block =
  | { type: 'text'; heading?: string; body: string }
  | { type: 'images'; images: SectionImage[] };

type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    id: 'chair-design',
    title: 'Minimalist Chair Design',
    blocks: [
      {
        type: 'text',
        body: 'This project explores how simple geometric forms can be used to create a functional and visually balanced chair. The design focuses on combining solid structure with open space to achieve both stability and lightness.',
      },
      {
        type: 'text',
        heading: 'Concept + Inspiration',
        body: 'This design was inspired by minimalist furniture and geometric forms. I aimed to create a chair that feels solid yet visually light through the use of open space.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/p1-1.JPG',
            alt: 'Reference chair — tan upholstered',
            aspect: 'aspect-square',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/p1-2.jpg',
            alt: 'Reference chair — slipper',
            aspect: 'aspect-square',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/IMG_2248.JPG',
            alt: 'Reference chair — beige upholstered',
            aspect: 'aspect-square',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/IMG_4255.jpg',
            alt: 'Reference chair — black banquet',
            aspect: 'aspect-square',
            colSpan: 'md:col-span-3',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Sketch Exploration',
        body: 'I explored different chair forms, testing proportions, backrests, and base structures. These sketches helped me understand how form affects function and balance.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/chair-sketches.png',
            alt: 'Chair sketches — early explorations',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/p2-2.jpeg',
            alt: 'Chair sketch',
            caption: 'Crafting Spaces\nInterior Design & Spatial Planning\nDesigning spaces that balance beauty and function—where every material, proportion, and detail is intentionally considered.',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/p2-3.jpeg',
            alt: 'Chair sketch development',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/p2-4.jpeg',
            alt: 'Chair design development',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Design Development',
        body: 'The chair was developed by first creating a template using Bristol board. The pieces were cut and assembled to test the structure and proportions. The refined template was then transferred to cardboard for strength, and faux leather was applied to achieve the final form and finish.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/p3-1.PNG',
            alt: 'White cardboard prototype',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-2',
          },
          {
            src: '/assets/p3-2.PNG',
            alt: 'Cardboard template model',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-2',
          },
          {
            src: '/assets/IMG_4865.jpeg',
            alt: 'Cardboard template pieces laid flat',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-2',
          },
          {
            src: '/assets/p3-4.png',
            alt: 'Black leather components laid flat',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-2',
          },
          {
            src: '/assets/IMG_4936.jpeg',
            alt: 'Hand sewing fabric cushion',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-2',
          },
          {
            src: '/assets/IMG_4940.jpeg',
            alt: 'Cushion sample with stuffing',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-2',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Final Results',
        body: 'Faux leather was used for durability and a clean finish, while a cotton polyester cushion adds comfort and softness. The chair was designed with human comfort in mind. Its proportions support a natural sitting position while maintaining a compact form. This project helped me understand the importance of exploring ideas and refining designs. I learned how form, material, and function work together in design.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/p4-1.jpeg',
            alt: 'Faux leather and cushion materials',
            caption: 'Faux leather and cotton polyester cushion',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-5',
          },
          {
            src: '/assets/p4-5.PNG',
            alt: 'Final chair — angled view',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/p4-6.png',
            alt: 'Final chair — front view',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-3',
          },
        ],
      },
    ],
  },
  {
    id: 'book-box',
    title: 'Book and Box Design',
    blocks: [
      {
        type: 'text',
        body: 'This project explores the transformation of flat materials into three-dimensional forms. Through folding and construction, I developed a series of book and box structures that emphasize form, structure, and spatial relationships.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/3D 1.JPG',
            alt: 'Full set — stacked',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-5',
          },
          {
            src: '/assets/3D.JPG',
            alt: 'Full set — front view',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/Weight board.JPG',
            alt: 'Red books leaning',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-3',
          },
        ],
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/Box.JPG',
            alt: 'Red box — lid removed',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/Bookk.JPG',
            alt: 'Red box — lid open',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/Box 1.JPG',
            alt: 'Blue box — closed',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/Box 1 opened.JPG',
            alt: 'Blue box — open',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-3',
          },
        ],
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/A book.JPG',
            alt: 'Red book — flat with binding',
            aspect: 'aspect-[16/9]',
            colSpan: 'md:col-span-5',
          },
          {
            src: '/assets/Opened book.JPG',
            alt: 'Red book — standing open',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/A B book.JPG',
            alt: 'A-B book — cover detail',
            aspect: 'aspect-square',
            colSpan: 'md:col-span-4',
          },
        ],
      },
    ],
  },
  {
    id: 'color-transparency',
    title: 'Color and Transparency',
    blocks: [
      {
        type: 'text',
        body: 'This section explores fundamental 2D design principles through studies of color and transparency. These exercises focus on how color relationships, layering, and overlap can create depth, contrast, and visual interaction within a composition.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/IMG_1875 (1).JPG',
            alt: 'Illusion of Transparency',
            caption: 'Illusion of Transparency',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-6',
          },
          {
            src: '/assets/IMG_1870.JPG',
            alt: '8 Color Unity Combinations',
            caption: '8 Color Unity Combinations',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-6',
          },
        ],
      },
    ],
  },
  {
    id: 'composition-2d',
    title: '2D Composition Study',
    blocks: [
      {
        type: 'images',
        images: [
          {
            src: '/assets/IMG_8906.jpeg',
            alt: 'Black and white composition',
            caption:
              'This piece explores shape and composition using black and white contrast. The design focuses on balance, movement, and the arrangement of positive and negative space.',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/IMG_8899.jpeg',
            alt: 'Line work composition',
            caption:
              'This stage translates the composition into line work. The lines define structure and guide the overall flow of the design.',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/IMG_8909.jpeg',
            alt: 'Shaded composition',
            caption:
              'Shading was added to introduce depth and contrast. This step helps create a sense of form and spatial variation.',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-3',
          },
          {
            src: '/assets/IMG_1965.JPG',
            alt: 'Color composition',
            caption:
              'The final design applies color to enhance depth and visual interest. Color relationships were used to create contrast, harmony, and a sense of movement.',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-3',
          },
        ],
      },
    ],
  },
  {
    id: 'abstract-composition',
    title: 'Abstract Composition: Movement and Color Study',
    blocks: [
      {
        type: 'text',
        body: 'This abstract composition combines geometric and organic forms to explore movement, rhythm, and depth. Inspired by Kandinsky, overlapping shapes, directional lines, and a teal-orange-red-violet palette guide the eye. A large teal sphere anchors the focal point, while repeating forms, line weight, and color create unity and asymmetrical balance.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/IMG_0351.jpeg',
            alt: 'Initial sketch',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/IMG_0466.jpeg',
            alt: 'In-progress coloured painting',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/51147797-3237-476C-9A50-D4C19FEF3398.jpg',
            alt: 'Final abstract composition',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
        ],
      },
    ],
  },
  {
    id: '2d-designs',
    title: '2D Designs',
    blocks: [
      {
        type: 'text',
        body: 'This project explores a range of artistic styles through the study of 20 different artists. Each piece interprets a distinct visual language, focusing on color, composition, and technique to understand how different approaches influence design.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/IMG_1989 3.JPG',
            alt: '20 Artists',
            caption: '20 Artists',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-5',
          },
          {
            src: '/assets/Jabberwocky.jpeg',
            alt: 'Jabberwocky',
            caption: 'This illustration interprets Jabberwocky through the combination of text and imagery, exploring storytelling, composition, and color.',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-7',
          },
        ],
      },
    ],
  },
  {
    id: 'portrait-study',
    title: 'A Portrait Study',
    blocks: [
      {
        type: 'text',
        body: "This project is a study of the portrait style of Richard Avedon. I analyzed his use of minimal composition, neutral backgrounds, and high-contrast lighting, then applied these elements in my own work. Through directing my subjects' poses and expressions, I focused on capturing authentic personality while maintaining a clean and timeless visual aesthetic.",
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/IMG_5195.JPG',
            alt: 'Portrait study I',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/IMG_5197.JPG',
            alt: 'Portrait study II',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/IMG_5198.JPG',
            alt: 'Portrait study III',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-4',
          },
        ],
      },
    ],
  },
  {
    id: 'conceptual-photography',
    title: 'Conceptual Photography Series',
    blocks: [
      {
        type: 'text',
        body: 'This conceptual photography series explores identity and transformation. Through the use of masks, lighting, and contrast, the images create a dramatic atmosphere that reflects themes of concealment and self-expression.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/IMG_0448.jpg',
            alt: 'Conceptual photography I',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-6',
          },
          {
            src: '/assets/IMG_0463.jpg',
            alt: 'Conceptual photography II',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-6',
          },
        ],
      },
    ],
  },
  {
    id: 'self-portrait',
    title: 'Self Portrait Study',
    blocks: [
      {
        type: 'text',
        body: 'This self-portrait was captured independently using a tripod to control composition and framing. Adobe Photoshop was used to refine the background and enhance the overall presentation.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/self-portrait1.jpg',
            alt: 'Self portrait I',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-6',
          },
          {
            src: '/assets/self-portrait2.jpg',
            alt: 'Self portrait II',
            aspect: 'aspect-[2/3]',
            colSpan: 'md:col-span-6',
          },
        ],
      },
    ],
  },
  {
    id: 'moodboards',
    title: 'Moodboard Exploration',
    blocks: [
      {
        type: 'text',
        body: 'These moodboards explore different interior concepts through color, material, and furniture selection. They help define the overall aesthetic and guide the design direction.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/moodboard 1 bedroom.jpg',
            alt: 'Bedroom moodboard',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/living-room-design.jpg',
            alt: 'Living room design',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/bedroom-interior-render.png',
            alt: 'Bedroom interior render',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/IMG_2013.jpg',
            alt: "Ru-In's Restaurant — floor plan and material board",
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-12',
          },
        ],
      },
    ],
  },
  {
    id: 'floorplans',
    title: 'Floorplans',
    blocks: [
      {
        type: 'images',
        images: [
          {
            src: '/assets/first-floor-plan.jpg',
            alt: '1st Floor Plan',
            caption: '1st Floor Plan',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-6',
          },
          {
            src: '/assets/basement-plan.jpg',
            alt: 'Basement Plan',
            caption: 'Basement Plan',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-6',
          },
        ],
      },
    ],
  },
  {
    id: 'building-section',
    title: 'Building Section',
    blocks: [
      {
        type: 'images',
        images: [
          {
            src: '/assets/building-section.jpg',
            alt: 'Building Section',
            aspect: 'aspect-[16/9]',
            colSpan: 'md:col-span-12',
          },
        ],
      },
    ],
  },
  {
    id: 'exterior-elevation',
    title: 'Exterior Elevation',
    blocks: [
      {
        type: 'images',
        images: [
          {
            src: '/assets/exterior-elevation-1.jpg',
            alt: 'Exterior Elevation I',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-6',
          },
          {
            src: '/assets/exterior-elevation-2.jpg',
            alt: 'Exterior Elevation II',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-6',
          },
        ],
      },
    ],
  },
  {
    id: 'floor-plan-furniture',
    title: 'Floor Plan With Furniture',
    blocks: [
      {
        type: 'images',
        images: [
          {
            src: '/assets/garage.png',
            alt: '1st floor plan with furniture',
            caption: '1st Floor Plan',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/second-floor-plan.jpg',
            alt: '2nd floor plan with furniture',
            caption: '2nd Floor Plan',
            aspect: 'aspect-[3/4]',
            colSpan: 'md:col-span-4',
          },
          {
            src: '/assets/IMG_5522.jpg',
            alt: 'Rendered floor plan — bedrooms and master bath',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-4',
          },
        ],
      },
    ],
  },
  {
    id: 'washroom-elevation',
    title: 'Washroom Elevation',
    blocks: [
      {
        type: 'images',
        images: [
          {
            src: '/assets/interior-elevation.jpg',
            alt: 'Washroom Elevation',
            aspect: 'aspect-[16/9]',
            colSpan: 'md:col-span-12',
          },
        ],
      },
    ],
  },
  {
    id: 'sketchup',
    title: 'Conference Room Design: SketchUp Rendering',
    blocks: [
      {
        type: 'text',
        body: 'This project presents a 3D visualization of a conference room designed using SketchUp. The space focuses on functionality, layout, and material selection to create a professional and visually balanced environment. Elements such as lighting, furniture arrangement, and wall treatments were carefully considered to enhance both usability and overall aesthetic.',
      },
      {
        type: 'images',
        images: [
          {
            src: '/assets/office room 14.jpg',
            alt: 'Fashion Nova — conference room',
            aspect: 'aspect-[16/9]',
            colSpan: 'md:col-span-7',
          },
          {
            src: '/assets/office room 11.jpg',
            alt: 'Fashion Nova — private office',
            aspect: 'aspect-[4/3]',
            colSpan: 'md:col-span-5',
          },
          {
            src: '/assets/office room 12.jpg',
            alt: 'Fashion Nova — alternate view',
            aspect: 'aspect-[16/9]',
            colSpan: 'md:col-span-5',
          },
          {
            src: '/assets/office room 15.jpg',
            alt: 'Fashion Nova — glass pod',
            aspect: 'aspect-[16/9]',
            colSpan: 'md:col-span-7',
          },
        ],
      },
    ],
  },
];

interface SelectedWorksProps {
  projects?: unknown[];
}

export function SelectedWorks(_: SelectedWorksProps) {
  return (
    <section
      id="work"
      className="px-6 md:px-16 lg:px-24 pt-10 md:pt-16 pb-12 md:pb-20">
      <div className="max-w-350 mx-auto">
        {/* Main heading */}
        <ScrollReveal>
          <div className="mb-12 md:mb-20">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#1A1714] leading-none">
              Selected{' '}
              <span className="font-display-italic">Works</span>
            </h2>
            <div className="h-px bg-[#E0D8CE] mt-6" />
          </div>
        </ScrollReveal>

        {/* Project sections */}
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="mb-16 md:mb-28">
            {/* Section title */}
            <ScrollReveal>
              <div className="mb-6 md:mb-8">
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-[#1A1714] leading-tight">
                  {section.title}
                </h3>
                <div className="h-px bg-[#E0D8CE] mt-4" />
              </div>
            </ScrollReveal>

            {/* Blocks */}
            {section.blocks.map((block, blockIndex) => {
              if (block.type === 'text') {
                return (
                  <ScrollReveal key={blockIndex}>
                    <div className="mb-5 md:mb-7 max-w-3xl">
                      {block.heading && (
                        <p className="label text-[0.5625rem] mb-2">
                          {block.heading}
                        </p>
                      )}
                      <p className="text-[0.9375rem] leading-[1.75] text-[#7A7168]">
                        {block.body}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              }

              if (block.type === 'images') {
                return (
                  <div
                    key={blockIndex}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
                    {block.images.map((img, imgIndex) => (
                      <ScrollReveal
                        key={imgIndex}
                        className={img.colSpan}
                        delay={imgIndex * 80}>
                        <LightboxTrigger src={img.src} alt={img.alt}>
                          <div
                            className={`img-hover-container ${img.aspect} relative bg-[#EDE8E1] overflow-hidden`}>
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            />
                          </div>
                        </LightboxTrigger>
                        {img.caption && (
                          <p className="mt-2 text-[0.8125rem] leading-[1.6] text-[#7A7168] whitespace-pre-line">
                            {img.caption}
                          </p>
                        )}
                      </ScrollReveal>
                    ))}
                  </div>
                );
              }

              return null;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
