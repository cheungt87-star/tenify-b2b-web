import type { CSSProperties } from "react";
import {
  BackIcon,
  BathIcon,
  BedIcon,
  ChevronIcon,
  ClipboardIcon,
  DropletIcon,
  EditIcon,
  HomeIcon,
  KitchenIcon,
  PlusIcon,
  ProfileIcon,
  ReportsIcon,
  SofaIcon,
} from "./icons";
import ui from "./screen.module.css";
import styles from "./step-screens.module.css";

const TYPES = ["Apartment", "Villa", "Townhouse", "Duplex"] as const;
const ROLES = ["Landlord", "Tenant", "Neither"] as const;

const ROOMS = [
  { name: "Lounge/living area", items: 10, Icon: SofaIcon },
  { name: "Kitchen", items: 13, Icon: KitchenIcon },
  { name: "Master bedroom", items: 10, Icon: BedIcon },
  { name: "Master en-suite", items: 0, Icon: BathIcon },
  { name: "Powder room", items: 4, Icon: DropletIcon },
] as const;

const KEY_ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"] as const;

function reveal(delay: string): CSSProperties {
  return { "--d": delay } as CSSProperties;
}

export function StepOneScreen() {
  return (
    <div
      className={`${ui.root} ${styles.stepOneRoot}`}
      role="img"
      aria-label="Tenify setup: from the Inspections home with no inspections in progress, tap New inspection, choose an apartment with one bedroom, furnished, tenant, enter 1201 Marina Gate, Marina, Dubai, start the inspection and see five rooms ready to complete"
    >
      {/* Scene 1: Inspections home */}
      <section className={`${styles.scene} ${styles.homeScene}`}>
        <div className={styles.homeHead}>
          <div>
            <p className={styles.homeTitle}>Inspections</p>
            <p className={styles.homeGreeting}>Good morning, Cristiano</p>
          </div>
          <span className={styles.avatar}>CR</span>
        </div>
        <div className={`${styles.emptyCard} ${styles.s1Reveal}`} style={reveal("0.15s")}>
          <span className={styles.emptyIcon}>
            <ClipboardIcon />
          </span>
          <p className={styles.emptyText}>No inspections in progress</p>
          <span className={styles.outlineBtn}>New inspection</span>
        </div>
        <span className={styles.fab}>
          <PlusIcon />
          New inspection
        </span>
        <div className={styles.bottomNav}>
          <span className={`${styles.navItem} ${styles.navItemActive}`}>
            <HomeIcon />
            Home
          </span>
          <span className={styles.navItem}>
            <ReportsIcon />
            Reports
          </span>
          <span className={styles.navItem}>
            <ProfileIcon />
            Profile
          </span>
        </div>
      </section>

      {/* Scene 2: New inspection form */}
      <section className={`${styles.scene} ${styles.formScene}`}>
        <div className={styles.formNav}>
          <BackIcon />
          <span>New inspection</span>
          <i className={styles.navSpacer} />
        </div>

        <p className={`${ui.label} ${styles.s1Reveal}`} style={reveal("1.75s")}>
          The property
        </p>
        <div className={`${styles.chipsRow} ${styles.s1Reveal}`} style={reveal("1.85s")}>
          {TYPES.map((type) => (
            <span
              key={type}
              className={`${styles.typeChip} ${type === "Apartment" ? styles.typeChipSelected : ""}`}
            >
              {type}
            </span>
          ))}
        </div>

        <div className={`${styles.cardRow} ${styles.s1Reveal}`} style={reveal("2s")}>
          <span>Bedrooms</span>
          <span className={styles.stepperControl}>
            <b className={`${styles.stepBtn} ${styles.stepBtnMinus}`}>−</b>
            <span className={styles.stepper}>
              <b className={styles.stepperFirst}>2</b>
              <b className={styles.stepperSecond}>1</b>
            </span>
            <b className={styles.stepBtn}>+</b>
          </span>
        </div>

        <div className={`${styles.cardRow} ${styles.s1Reveal}`} style={reveal("2.15s")}>
          <span>Furnished?</span>
          <span className={styles.toggle}>
            <i />
          </span>
        </div>
        <p className={styles.helper}>Furnishings will not be pre-populated</p>

        <p className={`${ui.label} ${styles.s1Reveal}`} style={reveal("2.3s")}>
          I am the
        </p>
        <div className={`${styles.chipsRow} ${styles.s1Reveal}`} style={reveal("2.4s")}>
          {ROLES.map((role) => (
            <span
              key={role}
              className={`${styles.typeChip} ${styles.roleChip} ${role === "Tenant" ? styles.roleChipSelected : ""}`}
            >
              {role}
            </span>
          ))}
        </div>

        <div className={`${styles.addressHead} ${styles.s1Reveal}`} style={reveal("2.55s")}>
          <p className={ui.label}>Address</p>
          <span className={styles.addLater}>Add later</span>
        </div>
        <div className={`${styles.addressGrid} ${styles.s1Reveal}`} style={reveal("2.65s")}>
          <div className={styles.inputCell}>
            <span className={`${styles.inputSwap} ${styles.unitPlaceholder}`}>Unit</span>
            <span className={`${styles.inputSwap} ${styles.unitValue}`}>1201</span>
          </div>
          <div className={styles.inputCell}>
            <span className={`${styles.inputSwap} ${styles.buildingPlaceholder}`}>
              Building or community
            </span>
            <span className={`${styles.inputSwap} ${styles.buildingValue}`}>
              Marina Gate
              <i className={styles.caret} />
            </span>
          </div>
          <div className={styles.inputCell}>
            <span className={`${styles.inputSwap} ${styles.areaPlaceholder}`}>Area (optional)</span>
            <span className={`${styles.inputSwap} ${styles.areaValue}`}>Marina</span>
          </div>
          <div className={styles.inputCell}>
            <span className={styles.dropdownValue}>
              Dubai
              <i className={styles.chevronDown} />
            </span>
          </div>
        </div>

        <div className={styles.formFooter}>
          <div className={styles.hintSwap}>
            <span className={styles.hintRole}>Choose your role to continue</span>
            <span className={styles.hintAddress}>Enter unit and building to continue</span>
          </div>
          <div className={styles.startBtn}>Start inspection</div>
        </div>

        <div className={styles.keyboard}>
          <div className={styles.kbToolbar}>
            <span>∧</span>
            <span>∨</span>
            <span className={styles.kbCheck}>✓</span>
          </div>
          {KEY_ROWS.map((row) => (
            <div key={row} className={styles.kbRow}>
              {row.split("").map((key) => (
                <span key={key} className={styles.kbKey}>
                  {key}
                </span>
              ))}
            </div>
          ))}
          <div className={styles.kbRow}>
            <span className={`${styles.kbKey} ${styles.kbKeyWide}`}>123</span>
            <span className={`${styles.kbKey} ${styles.kbSpace}`} />
            <span className={`${styles.kbKey} ${styles.kbKeyWide}`}>⏎</span>
          </div>
        </div>
      </section>

      {/* Scene 3: Untitled inspection, rooms to complete */}
      <section className={`${styles.scene} ${styles.roomsScene}`}>
        <div className={`${styles.roomsNav} ${styles.s1Reveal}`} style={reveal("7.95s")}>
          <span className={styles.saveExit}>
            <BackIcon />
            Save &amp; exit
          </span>
          <span className={styles.editBtn}>
            <EditIcon />
          </span>
        </div>
        <div className={styles.s1Reveal} style={reveal("8.05s")}>
          <p className={styles.roomsTitle}>Untitled</p>
          <p className={styles.roomsSub}>
            Marina Gate, 1201, Marina, Dubai
            <br />
            Apartment · 1 bedroom · Furnished
          </p>
        </div>
        <div className={`${styles.progressCard} ${styles.s1Reveal}`} style={reveal("8.2s")}>
          <span className={styles.ring}>0/5</span>
          <span className={styles.progressMeta}>
            <b>5 rooms to go</b>
            <small>Finish every room to generate the report</small>
          </span>
        </div>
        <div className={`${styles.roomsActions} ${styles.s1Reveal}`} style={reveal("8.35s")}>
          <span className={styles.selectBtn}>
            <i className={styles.radio} />
            Select
          </span>
          <span className={styles.addBtn}>
            <PlusIcon />
            Add
          </span>
        </div>
        <div className={`${styles.roomList} ${styles.s1Reveal}`} style={reveal("8.5s")}>
          {ROOMS.map(({ name, items, Icon }) => (
            <div key={name} className={styles.roomRow}>
              <span className={styles.roomIcon}>
                <Icon />
              </span>
              <span className={styles.roomMeta}>
                <b>{name}</b>
                <small>Not started · {items} items</small>
              </span>
              <span className={styles.roomChevron}>
                <ChevronIcon />
              </span>
            </div>
          ))}
        </div>
        <div className={`${styles.roomsFooter} ${styles.s1Reveal}`} style={reveal("8.75s")}>
          <p>Complete 5 more rooms to unlock</p>
          <div className={styles.generateBtn}>Generate report</div>
        </div>
      </section>
    </div>
  );
}
