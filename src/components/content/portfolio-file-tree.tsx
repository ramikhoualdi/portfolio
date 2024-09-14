import { File, Folder, Tree } from "@/components/magicui/file-tree";
import { Switch } from "@/components/ui/switch";
import { Children } from "react";

const ELEMENTS = [
  {
    id: "0",
    isSelectable: true,
    name: "Portfolio",
    children: [
      {
        id: "1",
        isSelectable: true,
        name: "src",
        children: [
          {
            id: "2",
            isSelectable: true,
            name: "actions",
            children: [
              {
                id: "3",
                isSelectable: false,
                name: "geo-location.ts",
              },
            ],
          },
          {
            id: "4",
            isSelectable: true,
            name: "app",
            children: [
              {
                id: "5",
                isSelectable: true,
                name: "(app)",
                children: [
                  {
                    id: "6",
                    isSelectable: false,
                    name: "layout.tsx",
                  },
                  {
                    id: "7",
                    isSelectable: false,
                    name: "loading.tsx",
                  },
                  {
                    id: "8",
                    isSelectable: true,
                    name: "page.tsx (*)",
                    children: [
                      {
                        id: "9",
                        isSelectable: true,
                        name: "me.tsx",
                      },
                      {
                        id: "10",
                        isSelectable: true,
                        name: "about-us.tsx",
                      },
                      {
                        id: "11",
                        isSelectable: true,
                        name: "apps-preview.tsx",
                      },
                      {
                        id: "12",
                        isSelectable: true,
                        name: "skills.tsx",
                      },
                      {
                        id: "13",
                        isSelectable: true,
                        name: "broadcast-indicator.tsx",
                      },
                      {
                        id: "14",
                        isSelectable: true,
                        name: "users-cursors.tsx",
                      },
                      {
                        id: "15",
                        isSelectable: true,
                        name: "text-cursor.tsx",
                      },
                      {
                        id: "16",
                        isSelectable: true,
                        name: "profile-file-tree.tsx",
                      },
                      {
                        id: "17",
                        isSelectable: true,
                        name: "scroll-trigger.tsx",
                      },
                    ],
                  },
                ],
              },
              {
                id: "18",
                isSelectable: true,
                name: "api",
                children: [
                  {
                    id: "19",
                    isSelectable: true,
                    name: "geo",
                    children: [
                      {
                        id: "20",
                        isSelectable: false,
                        name: "route.ts",
                      },
                    ],
                  },
                ],
              },
              {
                id: "21",
                isSelectable: false,
                name: "global-error.tsx",
              },
              {
                id: "22",
                isSelectable: false,
                name: "layout.tsx",
              },
            ],
          },
          // {
          //   id: "23",
          //   isSelectable: true,
          //   name: "components",
          //   children: [
          //     {
          //       id: "24",
          //       isSelectable: false,
          //       name: "constants",
          //       children: [],
          //     },
          //     {
          //       id: "25",
          //       isSelectable: false,
          //       name: "content",
          //       children: [],
          //     },
          //     {
          //       id: "26",
          //       isSelectable: false,
          //       name: "magicui",
          //       children: [],
          //     },
          //     {
          //       id: "27",
          //       isSelectable: false,
          //       name: "ui",
          //       children: [],
          //     },
          //   ],
          // },
          // {
          //   id: "28",
          //   isSelectable: false,
          //   name: "config",
          //   children: [],
          // },
          // {
          //   id: "29",
          //   isSelectable: false,
          //   name: "context",
          //   children: [],
          // },
          // {
          //   id: "30",
          //   isSelectable: false,
          //   name: "hooks",
          //   children: [],
          // },
          // {
          //   id: "31",
          //   isSelectable: false,
          //   name: "lib",
          //   children: [],
          // },
          // {
          //   id: "32",
          //   isSelectable: false,
          //   name: "styles",
          //   children: [],
          // },
          {
            id: "33",
            isSelectable: false,
            name: "socket.js",
          },
        ],
      },
    ],
  },
];

export function ProfileFileTree() {
  return (
    <div className="relative mt-4 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      {/* <h2>Portfolio</h2> */}
      <Tree
        className="overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={[
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          // "23",
          // "24",
          // "25",
          // "26",
          // "27",
          // "28",
          // "29",
          // "30",
          // "31",
          // "32",
          "33",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="Portfolio" value="0">
          <Folder element="src" value="1">
            <Folder value="2" element="actions">
              <File value="3">
                <p>geo-location.ts</p>
              </File>
            </Folder>
            <Folder value="4" element="app">
              <Folder value="5" element="(app)">
                <File value="6">
                  <p>layout.tsx</p>
                </File>
                <File value="7">
                  <p>loading.tsx</p>
                </File>
                <Folder value="8" element="page.tsx (*)">
                  <File value="9" className="mb-1">
                    <p>me.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="10" className="mb-1">
                    <p>about-us.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="11" className="mb-1">
                    <p>apps-preview.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="12" className="mb-1">
                    <p>skills.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="13" className="mb-1">
                    <p>broadcast-indicator.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="14" className="mb-1">
                    <p>users-cursors.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="15" className="mb-1">
                    <p>text-cursor.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="16" className="mb-1">
                    <p>profile-file-tree.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                  <File value="17" className="mb-1">
                    <p>scroll-trigger.tsx</p>
                    <div className="absolute right-0">
                      <Switch id="airplane-mode" />
                    </div>
                  </File>
                </Folder>
              </Folder>
              <Folder value="18" element="api">
                <Folder value="19" element="geo">
                  <File value="20">
                    <p>route.ts</p>
                  </File>
                </Folder>
              </Folder>
              <File value="21">
                <p>global-error.tsx</p>
              </File>
              <File value="22">
                <p>layout.tsx</p>
              </File>
            </Folder>
            {/* <Folder value="23" element="components">
              <Folder value="24" element="constants"></Folder>
              <Folder value="25" element="content"></Folder>
              <Folder value="26" element="magicui"></Folder>
              <Folder value="27" element="ui"></Folder>
            </Folder>
            <Folder value="28" element="config"></Folder>
            <Folder value="29" element="context"></Folder>
            <Folder value="30" element="hooks"></Folder>
            <Folder value="31" element="lib"></Folder>
            <Folder value="32" element="styles"></Folder> */}
            <File value="33">
              <p>socket.js</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}
